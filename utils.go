package utils

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

// ReadFile reads a file and returns its contents
func ReadFile(filename string) (string, error) {
	data, err := ioutil.ReadFile(filename)
	if err != nil {
		return "", err
	}
	return string(data), nil
}

// WriteFile writes data to a file
func WriteFile(filename, data string) error {
	return ioutil.WriteFile(filename, []byte(data), os.ModePerm)
}

// MarshalJSON converts an interface to JSON
func MarshalJSON(v interface{}) (string, error) {
	jsonData, err := json.Marshal(v)
	if err != nil {
		return "", err
	}
	return string(jsonData), nil
}

// UnmarshalJSON converts JSON string to interface
func UnmarshalJSON(data string, v interface{}) error {
	return json.Unmarshal([]byte(data), v)
}
