//--This is the main program about Connecting Servers in Go...
package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

/* This is the main function,
where the program start. */
func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		log.Println("Hello World!")
		d, err := ioutil.ReadAll(r.Body)
		if err != nil {
			http.Error(w, "Ooops", http.StatusBadRequest)
			return
		}
		fmt.Fprintf(w, "Hello %s\n", d)
	})

	http.HandleFunc("/novisad", func(http.ResponseWriter, *http.Request) {
		log.Println("Goodbye World!")
	})

	http.ListenAndServe(":9090", nil)
}
