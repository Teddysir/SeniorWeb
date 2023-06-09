package seniorWeb.TodoList.domain.dto.Member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import seniorWeb.TodoList.domain.entity.user.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private int id;
    private String username;
    private String password;
    private String role;
    private String email;

    public UserDto(User user){
        this.id = user.getId();
        this.email = user.getEmail();
        this.role = user.getRole();
        this.username = user.getUsername();
        this.password = user.getPassword();
    }
}
