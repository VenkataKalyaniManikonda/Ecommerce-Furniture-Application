package com.furnitures.domain;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Furnitures {

    @Id
    private int fur_Id;
    private String fur_Name;
    private String fur_CompanyName;
    private int fur_price;
    private String fur_kingSize;
    private String fur_QueenSize;


    public Furnitures() {
    }

    public Furnitures(int fur_Id, String fur_Name, String fur_CompanyName, int fur_price, String fur_kingSize, String fur_QueenSize) {
        this.fur_Id = fur_Id;
        this.fur_Name = fur_Name;
        this.fur_CompanyName = fur_CompanyName;
        this.fur_price = fur_price;
        this.fur_kingSize = fur_kingSize;
        this.fur_QueenSize = fur_QueenSize;
    }

    public int getFur_Id() {
        return fur_Id;
    }

    public void setFur_Id(int fur_Id) {
        this.fur_Id = fur_Id;
    }

    public String getFur_Name() {
        return fur_Name;
    }

    public void setFur_Name(String fur_Name) {
        this.fur_Name = fur_Name;
    }

    public String getFur_CompanyName() {
        return fur_CompanyName;
    }

    public void setFur_CompanyName(String fur_CompanyName) {
        this.fur_CompanyName = fur_CompanyName;
    }

    public int getFur_price() {
        return fur_price;
    }

    public void setFur_price(int fur_price) {
        this.fur_price = fur_price;
    }

    public String getFur_kingSize() {
        return fur_kingSize;
    }

    public void setFur_kingSize(String fur_kingSize) {
        this.fur_kingSize = fur_kingSize;
    }

    public String getFur_QueenSize() {
        return fur_QueenSize;
    }

    public void setFur_QueenSize(String fur_QueenSize) {
        this.fur_QueenSize = fur_QueenSize;
    }

    @Override
    public String toString() {
        return "Furnitures{" +
                "fur_Id=" + fur_Id +
                ", fur_Name='" + fur_Name + '\'' +
                ", fur_CompanyName='" + fur_CompanyName + '\'' +
                ", fur_price=" + fur_price +
                ", fur_kingSize='" + fur_kingSize + '\'' +
                ", fur_QueenSize='" + fur_QueenSize + '\'' +
                '}';
    }
}
