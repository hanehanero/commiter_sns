package main

import (
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

// ユーザー情報の型
type User struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

// ツイート情報の型
type Tweet struct {
	UserID  string `json:"user_id"`
	Message string `json:"message"`
}

func main() {
	r := gin.Default()

	// CORSミドルウェアの設定
	r.Use(cors.Default())

	// ルートの設定
	setRoutes(r)

	r.Run() // 0.0.0.0:8080でサーバーを起動
}

func setRoutes(r *gin.Engine) {
	r.GET("/ping", handlePing)
	r.POST("/register", handleRegister)
	r.POST("/tweet", handleTweet)
}

func handlePing(c *gin.Context) {
	c.JSON(200, gin.H{
		"message": "pong",
	})
}

func handleRegister(c *gin.Context) {
	var user User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	// データベースロジックはここに...

	c.JSON(200, gin.H{"message": "Registered successfully!"})
}

func handleTweet(c *gin.Context) {
	var tweet Tweet
	if err := c.ShouldBindJSON(&tweet); err != nil {
		c.JSON(400, gin.H{"error": err.Error()})
		return
	}

	// データベースロジックはここに...

	c.JSON(200, gin.H{"message": "Tweet posted successfully!"})
}
