package main

import (
	"context"
	"fmt"
	"time"
)

type Task struct {
	ID      string
	Execute func() error
}

type Scheduler struct {
	tasks []Task
}

func NewScheduler() *Scheduler {
	return &Scheduler{tasks: []Task{}}
}

func (s *Scheduler) AddTask(t Task) {
	s.tasks = append(s.tasks, t)
}

func (s *Scheduler) Start(ctx context.Context, interval time.Duration) {
	go func() {
		for {
			select {
			case <-ctx.Done():
				return
			default:
				for _, task := range s.tasks {
					if err := task.Execute(); err != nil {
						fmt.Printf("Error executing task %s: %v\n", task.ID, err)
					}
				}
			}
			time.Sleep(interval)
		}
	}()
}

func main() {
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()
	
	scheduler := NewScheduler()
	scheduler.AddTask(Task{ID: "task1", Execute: func() error {
		fmt.Println("Task 1 executing...")
		return nil
	}})
	scheduler.AddTask(Task{ID: "task2", Execute: func() error {
		fmt.Println("Task 2 executing...")
		return nil
	}})
	scheduler.Start(ctx, 2*time.Second)
	
	// Run for a while before exiting
	time.Sleep(10 * time.Second)
}