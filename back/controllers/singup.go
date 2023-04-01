package controllers

import (
	"back/entities"
	"back/pkg"
	"back/storage"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func SingUp(c *fiber.Ctx) error {
	engine, err := storage.CreateDBEngine()
	if err != nil {
		return err
	}

	req := new(entities.SignupRequest)
	if err := c.BodyParser(req); err != nil {
		return err
	}

	if req.Name == "" || req.Email == "" || req.Password == "" {
		return fiber.NewError(fiber.StatusBadRequest, "invalid signup credentials")
	}

	// save this info in the database
	hash, err := bcrypt.GenerateFromPassword([]byte(req.Password), bcrypt.DefaultCost)
	if err != nil {
		return err
	}

	user := &entities.User{
		Name:     req.Name,
		Email:    req.Email,
		Password: string(hash),
	}

	_, err = engine.Insert(user)
	if err != nil {
		return err
	}
	token, exp, err := pkg.CreateJWTToken(*user)
	if err != nil {
		return err
	}
	// create a jwt token

	return c.JSON(fiber.Map{"token": token, "exp": exp, "user": user})
}
