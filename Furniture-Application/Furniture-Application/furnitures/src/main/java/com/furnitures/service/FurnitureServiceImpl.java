package com.furnitures.service;


import com.furnitures.domain.Furnitures;
import com.furnitures.exceptions.FurnitureAlreadyExistException;
import com.furnitures.exceptions.FurnitureNotFoundException;
import com.furnitures.repository.FurnitureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FurnitureServiceImpl implements  FurnitureService
{

    private FurnitureRepository furnitureRepository;
    @Autowired
    public FurnitureServiceImpl(FurnitureRepository furnitureRepository) {
        this.furnitureRepository = furnitureRepository;
    }
    @Override
    public Furnitures postFurniture(Furnitures furn) throws FurnitureAlreadyExistException {
        if(furnitureRepository.findById(furn.getFur_Id()).isPresent())
        {
            throw new FurnitureAlreadyExistException();
        }

        return furnitureRepository.save(furn);
    }
    @Override
    public List<Furnitures> getAllFurnitures() {
        return furnitureRepository.findAll();
    }
    @Override
    public boolean deleteFurniture(int fur_Id) throws FurnitureNotFoundException {

        boolean flag = false;
        if(furnitureRepository.findById(fur_Id).isEmpty())
        {
            throw new FurnitureNotFoundException();
        }
        else
        {
            furnitureRepository.deleteById(fur_Id);
            flag=true;
        }
        return flag;
    }

    @Override
    public List<Furnitures> getOneFurniture(int fur_Id) throws FurnitureNotFoundException {
        if(furnitureRepository.findFurnituresById(fur_Id).isEmpty())
        {
            throw  new FurnitureNotFoundException();
        }
        return furnitureRepository.findFurnituresById(fur_Id);
    }

    @Override
    public Furnitures updateFurniture(Furnitures furn, int fur_Id) {
        if(furnitureRepository.findById(fur_Id).isEmpty())
        {
            return null;
        }
        return furnitureRepository.save(furn);
    }
}
