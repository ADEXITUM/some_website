package controllers

import (
	"back/entities"
	"back/pkg"
	"back/storage"

	"github.com/gofiber/fiber/v2"
	"golang.org/x/crypto/bcrypt"
)

func Login(c *fiber.Ctx) error {
	req := new(entities.LoginRequest)
	if err := c.BodyParser(req); err != nil {
		return err
	}

	engine, err := storage.CreateDBEngine()
	if err != nil {
		return err
	}

	if req.Email == "" || req.Password == "" {
		return fiber.NewError(fiber.StatusBadRequest, "invalid login credentials")
	}

	user := new(entities.User)
	has, err := engine.Where("email = ?", req.Email).Desc("id").Get(user)
	if err != nil {
		return err
	}
	if !has {
		return fiber.NewError(fiber.StatusBadRequest, "invalid login credentials")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(user.Password), []byte(req.Password)); err != nil {
		return err
	}

	token, exp, err := pkg.CreateJWTToken(*user)
	if err != nil {
		return err
	}

	return c.JSON(fiber.Map{"token": token, "exp": exp, "user": user})
}
