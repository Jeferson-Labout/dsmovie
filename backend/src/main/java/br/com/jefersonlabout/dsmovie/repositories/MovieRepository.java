package br.com.jefersonlabout.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.jefersonlabout.dsmovie.entities.Movie;

public interface MovieRepository extends JpaRepository<Movie, Long> {

	
	
}
