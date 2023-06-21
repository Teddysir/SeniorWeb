package seniorWeb.TodoList.domain.controller.member;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.dto.Member.UserDto;
import seniorWeb.TodoList.domain.entity.user.User;
import seniorWeb.TodoList.domain.repository.UserRepository;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

    @PostMapping("/joinProc")
    public ResponseEntity<String> joinProc(@RequestBody User user) {
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);
        return ResponseEntity.ok("회원가입되었습니다.");
    }

    @PostMapping("/")
    public ResponseEntity<String> login(@RequestBody UserDto userDto){
        String username = userDto.getUsername();
        String password = userDto.getPassword();

        User user = userRepository.findByUsername(username);
        if (user != null && bCryptPasswordEncoder.matches(password,user.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body("/memos");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("/");
        }
    }
}
