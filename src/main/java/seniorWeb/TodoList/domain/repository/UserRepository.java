package seniorWeb.TodoList.domain.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import seniorWeb.TodoList.domain.entity.user.User;


// user 이름으로 찾기
@Repository
public interface UserRepository extends JpaRepository<User,Integer> {
    User findByUsername(String username);
}
