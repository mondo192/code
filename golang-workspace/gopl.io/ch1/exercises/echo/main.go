package main

import (
	"fmt"
	"os"
)

func main() {
	var s1, sep1 string

	// Exercise 1.1
	for i := 0; i < len(os.Args); i++ {
		s1 += sep1 + os.Args[i]
		sep1 = " "
	}
	fmt.Println("Exercise 1.1: ", s1)

	// Exercise 1.2
	s2, sep2 := "", ""
	for key, arg := range os.Args[0:] {
		s2 += sep2 + arg
		sep2 = " "
		fmt.Println(key, s2)
	}

}
