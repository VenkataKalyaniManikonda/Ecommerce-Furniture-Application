package com.furnitures.repository;

import com.furnitures.domain.Furnitures;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FurnitureRepository extends MongoRepository<Furnitures,Integer> {

   @Query("{'fur_Id':{$in :[?0]}}")
   List<Furnitures> findFurnituresById(int fur_Id);
}
