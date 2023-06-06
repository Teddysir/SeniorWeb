package seniorWeb.TodoList.domain.controller;


import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.entity.user.User;
import seniorWeb.TodoList.domain.repository.UserRepository;

@Controller
@RequiredArgsConstructor
public class MemberController {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

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
    public String joinProc(User user){
        String rawPassword = user.getPassword();
        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
        user.setPassword(encPassword);
        user.setRole("ROLE_USER");
        userRepository.save(user);
        return "redirect:/";
    }
}

//@RestController
//@RequestMapping("/memos")
//@RequiredArgsConstructor
//public class MemberController {
//
//    private final BCryptPasswordEncoder bCryptPasswordEncoder;
//    private final UserRepository userRepository;
//
//    @GetMapping("/user")
//    public ResponseEntity<String> getUser() {
//        return ResponseEntity.ok("user");
//    }
//
//    @GetMapping("/join")
//    public ResponseEntity<String> getJoin() {
//        return ResponseEntity.ok("join");
//    }
//
//    @GetMapping("/login")
//    public ResponseEntity<String> getLogin() {
//        return ResponseEntity.ok("login");
//    }
//
//    @PostMapping("/join")
//    public ResponseEntity<User> join(@RequestBody User user){
//        String rawPassword = user.getPassword();
//        String encPassword = bCryptPasswordEncoder.encode(rawPassword);
//        user.setPassword(encPassword);
//        user.setRole("ROLE_USER");
//        User savedUser = userRepository.save(user);
//        return ResponseEntity.ok(savedUser);
//    }
//}
