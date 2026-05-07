// Package db provides a connection pool with health checks
package db

import (
    "database/sql"
    "fmt"
    "sync"
    "time"
    _ "github.com/lib/pq" // PostgreSQL driver
)

// Pool represents a database connection pool
type Pool struct {
    mu    sync.Mutex
    db    *sql.DB
    alive bool
}

// NewPool initializes a new connection pool
func NewPool(dataSource string, maxIdle, maxOpen int) (*Pool, error) {
    db, err := sql.Open("postgres", dataSource)
    if err != nil {
        return nil, err
    }
    db.SetMaxIdleConns(maxIdle)
    db.SetMaxOpenConns(maxOpen)
    pool := &Pool{db: db, alive: true}
    go pool.healthCheck()
    return pool, nil
}

// healthCheck periodically checks the health of the connection
func (p *Pool) healthCheck() {
    for range time.Tick(30 * time.Second) {
        p.mu.Lock()
        err := p.db.Ping()
        p.alive = (err == nil)
        p.mu.Unlock()
        if !p.alive {
            fmt.Println("Database connection lost")
        }
    }
}

// Get returns the underlying database connection
func (p *Pool) Get() (*sql.DB, bool) {
    p.mu.Lock()
    defer p.mu.Unlock()
    return p.db, p.alive
}
