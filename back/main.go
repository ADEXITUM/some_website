package main

import (
	"back/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	routes.Setup(app)

	if err := app.Listen(":3001"); err != nil {
		panic(err)
	}
}
