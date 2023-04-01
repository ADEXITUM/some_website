package routes

import (
	"back/controllers"

	"github.com/gofiber/fiber/v2"
	jwtware "github.com/gofiber/jwt/v3"
)

func Setup(app *fiber.App) {
	app.Post("/signup", controllers.SingUp)

	app.Post("/login", controllers.Login)

	private := setUpPrivate(app)
	private.Get("/", controllers.Private)

	public := setUpPublic(app)
	public.Get("/", controllers.Public)
}

func setUpPrivate(app *fiber.App) fiber.Router {
	private := app.Group("/private")
	private.Use(jwtware.New(jwtware.Config{
		SigningKey: []byte("secret"),
	}))

	return private
}

func setUpPublic(app *fiber.App) fiber.Router {
	return app.Group("/public")
}
