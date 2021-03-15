package com.demo.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.demo.entities.Book;

public interface BookRepository extends MongoRepository<Book, Integer> {

}
