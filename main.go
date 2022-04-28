package main

import (
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Println("Hello World")
		w.Write([]byte("Hello World"))
	})

	http.HandleFunc("/msg", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("<msg"))
	})

	log.Println("Server starting")
	http.ListenAndServe(":9090", nil)

}
