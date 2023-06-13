package com.interactive.demo.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.jetbrains.annotations.NotNull;

@Entity
@Data
@AllArgsConstructor
public class Driver {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;
    private String name;

    public Driver(){

    }
    @NotNull
    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "car_id")
    private Car car;

    /*
    Configuracion para relacion de muchos a muchos
    @JsonIgnore
    @ManyToMany
    @JoinTable( name = "driver", JoinColumn(name = "id_b"), InverseJoinColumns = @JoinColumn(name = "id_a"))
    private List<Auto> autoList;
     */

}
