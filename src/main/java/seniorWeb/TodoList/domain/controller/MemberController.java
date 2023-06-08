package seniorWeb.TodoList.domain.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.dto.Member.MemberDetails;
import seniorWeb.TodoList.domain.entity.user.User;
import seniorWeb.TodoList.domain.repository.UserRepository;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

    @PostMapping("/joinProc") // 회원가입이 되었으니까 등록된 회원을 토대로 로그인이 가능하게 만들기.
    public ResponseEntity<String> joinProc(@RequestBody User user) {
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);
        return ResponseEntity.ok("회원가입되었습니다.");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody MemberDetails memberDetails){
        String username = memberDetails.getUsername();
        String password = memberDetails.getPassword();

        User user = userRepository.findByUsername(username);
        if (user != null && bCryptPasswordEncoder.matches(password,user.getPassword())){
            return ResponseEntity.status(HttpStatus.OK).body("/memos");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("/");
        }
    }
}
