//--This is the main program about Connecting Servers in Go...
package main

import (
	"log"
	"net/http"
	"os"
)

/* This is the main function,
where the program start. */
func main() {
	l := log.New(os.Stdout, "Product-api", log.LstdFlags)
	hh := handlers.NewHello(l)

	sm := http.NewServeMux()
	sm.Handle("/", hh)

	http.ListenAndServe(":9090", sm)
}
