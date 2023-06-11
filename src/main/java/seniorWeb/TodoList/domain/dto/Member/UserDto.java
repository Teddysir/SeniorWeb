package seniorWeb.TodoList.domain.dto.Member;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import seniorWeb.TodoList.domain.entity.user.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
    private String username;
    private String password;

    public UserDto(User user){
        this.username = user.getUsername();
        this.password = user.getPassword();
    }
}
