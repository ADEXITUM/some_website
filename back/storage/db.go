package storage

import (
	"fmt"
	"log"

	_ "github.com/lib/pq"
	"xorm.io/xorm"
)

type User struct {
	Id       int64
	Name     string
	Email    string
	Password string `json:"-"`
}

func CreateDBEngine() (*xorm.Engine, error) {
	connectionInfo := fmt.Sprintf(
		"host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		"localhost",
		5432,
		"postgres",
		"qwerty",
		"postgres")

	engine, err := xorm.NewEngine("postgres", connectionInfo)
	if err != nil {
		log.Printf("data.CreateDBEngine #1:\nError: %s\n\n", err.Error())
		return nil, err
	}

	if err := engine.Ping(); err != nil {
		log.Printf("data.CreateDBEngine #2:\nError: %s\n\n", err.Error())
		return nil, err
	}

	if err := engine.Sync(new(User)); err != nil {
		log.Printf("data.CreateDBEngine #3:\nError: %s\n\n", err.Error())
		return nil, err
	}

	return engine, nil
}
