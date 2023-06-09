package seniorWeb.TodoList.domain.service;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import seniorWeb.TodoList.domain.entity.user.MemberDetails;
import seniorWeb.TodoList.domain.entity.user.User;
import seniorWeb.TodoList.domain.repository.UserRepository;

@Service
@RequiredArgsConstructor
public class MemberDetailsService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) {
        User user = userRepository.findByUsername(username);
        if(user != null){
            return new MemberDetails(user);
        }
        return null;
    }
}
