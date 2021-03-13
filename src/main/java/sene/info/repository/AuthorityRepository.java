package sene.info.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sene.info.domain.Authority;

/**
 * Spring Data JPA repository for the {@link Authority} entity.
 */
public interface AuthorityRepository extends JpaRepository<Authority, String> {}
