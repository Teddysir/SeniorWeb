package seniorWeb.TodoList.domain.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.entity.user.User;
import seniorWeb.TodoList.domain.repository.UserRepository;

@Controller
public class MemberController {

    @Autowired
    BCryptPasswordEncoder bCryptPasswordEncoder;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/user")
    public @ResponseBody String user(Model model){
        return "user";
    }

    @GetMapping("/join")
    public @ResponseBody String join(Model model){
        return "join";
    }

    @GetMapping("/login")
    public @ResponseBody String login(Model model){
        return "login";
    }

    @PostMapping("/joinProc")
    public ResponseEntity<String> joinProc(@RequestBody User user) {
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);
        return ResponseEntity.ok("회원가입되었습니다.");
    }
}
