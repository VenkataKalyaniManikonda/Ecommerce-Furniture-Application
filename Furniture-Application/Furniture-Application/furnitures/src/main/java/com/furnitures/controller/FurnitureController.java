package com.furnitures.controller;


import com.furnitures.domain.Furnitures;
import com.furnitures.exceptions.FurnitureAlreadyExistException;
import com.furnitures.exceptions.FurnitureNotFoundException;
import com.furnitures.service.FurnitureService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "*")
public class FurnitureController {

    private FurnitureService furnitureService;
    private ResponseEntity responseEntity;

    @Autowired
    public FurnitureController(final FurnitureService furnitureService) {
        this.furnitureService = furnitureService;
    }


    @PostMapping("furniture")
    public ResponseEntity<?> postFurniture(@RequestBody Furnitures furnitures) throws FurnitureAlreadyExistException {
        try {
            furnitureService.postFurniture(furnitures);
            responseEntity=new ResponseEntity(furnitures, HttpStatus.CREATED);
        }
        catch (FurnitureAlreadyExistException e) {

            throw  new FurnitureAlreadyExistException();
        }
        catch(Exception e)
        {
            responseEntity=new ResponseEntity<>("Error  !!!Try after sometime", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }


    @GetMapping("furnitures")
    public ResponseEntity<?> getAllFurnitures()
    {
        try{
            responseEntity = new ResponseEntity(furnitureService.getAllFurnitures(),HttpStatus.OK);
        }
        catch (Exception e){
            responseEntity = new ResponseEntity("Error !!! Try after sometime.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }



    @DeleteMapping("/furniture/{fur_Id}")
    public ResponseEntity<?> deleteFurniture(@PathVariable("fur_Id") int fur_Id) throws FurnitureNotFoundException{
        try{
            furnitureService.deleteFurniture(fur_Id);
            responseEntity = new ResponseEntity<>("Successfully deleted !!!", HttpStatus.OK);
        }
        catch(FurnitureNotFoundException e)
        {
            throw  new FurnitureNotFoundException();
        }
        catch(Exception exception)
        {
            String ex = exception.getMessage();
            System.out.println(exception.getMessage());
            responseEntity = new ResponseEntity("Error !!! Try after sometime.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }


    @GetMapping("furnitures/{fur_Id}")
    public ResponseEntity<?> getOneFurniture(@PathVariable("fur_Id") int fur_Id)
    {
        try
        {
            responseEntity=new ResponseEntity(furnitureService.getOneFurniture(fur_Id),HttpStatus.OK);
        }

        catch (Exception e){
            responseEntity = new ResponseEntity("Error !!! Try after sometime.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return responseEntity;
    }

    @PutMapping("/furniture/{fur_Id}")
    public ResponseEntity<?> updateFurniture(@RequestBody Furnitures furnitures,@PathVariable int fur_Id )
    {
        return new ResponseEntity<>(furnitureService.updateFurniture(furnitures,fur_Id),HttpStatus.OK);
    }
}
