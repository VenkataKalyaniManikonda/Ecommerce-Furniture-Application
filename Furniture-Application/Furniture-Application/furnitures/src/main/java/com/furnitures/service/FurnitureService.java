package com.furnitures.service;

import com.furnitures.domain.Furnitures;
import com.furnitures.exceptions.FurnitureAlreadyExistException;
import com.furnitures.exceptions.FurnitureNotFoundException;

import java.util.List;

public interface FurnitureService {

    Furnitures postFurniture(Furnitures furn) throws FurnitureAlreadyExistException;
    List<Furnitures> getAllFurnitures();
    boolean deleteFurniture(int fur_Id) throws FurnitureNotFoundException;
    List <Furnitures> getOneFurniture(int fur_Id) throws FurnitureNotFoundException;
    Furnitures updateFurniture(Furnitures furn,int fur_Id );





}
