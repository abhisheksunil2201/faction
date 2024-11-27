package server

import (
	"encoding/json"
	"log"
	"net/http"

	"fmt"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"

	"github.com/coder/websocket"
)

func (s *Server) RegisterRoutes() http.Handler {
	r := mux.NewRouter()

	// Authentication routes
	r.HandleFunc("/register", s.RegisterHandler).Methods("POST")
	r.HandleFunc("/login", s.LoginHandler).Methods("POST")
	r.HandleFunc("/logout", s.LogoutHandler).Methods("POST")

	r.HandleFunc("/health", s.healthHandler)
	r.HandleFunc("/websocket", s.websocketHandler)

	handler := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:3000"}, // Allow only your frontend
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Content-Type", "Authorization"},
		AllowCredentials: true,
	}).Handler(r)

	return handler
}

func (s *Server) healthHandler(w http.ResponseWriter, r *http.Request) {
	jsonResp, err := json.Marshal(s.db.Health())

	if err != nil {
		log.Fatalf("error handling JSON marshal. Err: %v", err)
	}

	_, _ = w.Write(jsonResp)
}

func (s *Server) websocketHandler(w http.ResponseWriter, r *http.Request) {
	socket, err := websocket.Accept(w, r, nil)

	if err != nil {
		log.Printf("could not open websocket: %v", err)
		_, _ = w.Write([]byte("could not open websocket"))
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	defer socket.Close(websocket.StatusGoingAway, "server closing websocket")

	ctx := r.Context()
	socketCtx := socket.CloseRead(ctx)

	for {
		payload := fmt.Sprintf("server timestamp: %d", time.Now().UnixNano())
		err := socket.Write(socketCtx, websocket.MessageText, []byte(payload))
		if err != nil {
			break
		}
		time.Sleep(time.Second * 2)
	}
}
