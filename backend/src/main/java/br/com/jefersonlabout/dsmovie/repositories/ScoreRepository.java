package br.com.jefersonlabout.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.jefersonlabout.dsmovie.entities.Score;
import br.com.jefersonlabout.dsmovie.entities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK> {	
	
}
