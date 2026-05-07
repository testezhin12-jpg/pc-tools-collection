package helpers

import (\n    "encoding/json"\n    "io/ioutil"\n    "log"\n    "os"\n    "time"\n    "sync"\n)\n
var (\n    config     Config\n    configLock sync.RWMutex\n)\n
type Config struct {\n    Setting1 string `json:"setting1"`\n    Setting2 int `json:"setting2"`\n}\n
func LoadConfig(filePath string) error {\n    data, err := ioutil.ReadFile(filePath)\n    if err != nil {\n        return err\n    }\n    var newConfig Config\n    if err := json.Unmarshal(data, &newConfig); err != nil {\n        return err\n    }\n    configLock.Lock()\n    config = newConfig\n    configLock.Unlock()\n    return nil\n}\n
func WatchConfig(filePath string, interval time.Duration) {\n    for {\n        time.Sleep(interval)\n        if err := LoadConfig(filePath); err != nil {\n            log.Printf("Error loading config: %v", err)\n        }\n    }\n}