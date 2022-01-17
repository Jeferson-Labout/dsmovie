package br.com.jefersonlabout.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.jefersonlabout.dsmovie.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {

	User findByEmail(String email);
	
}
