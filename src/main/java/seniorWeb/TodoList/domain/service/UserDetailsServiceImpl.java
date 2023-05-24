//package seniorWeb.TodoList.domain.service;
//
//import lombok.RequiredArgsConstructor;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Component;
//import seniorWeb.TodoList.domain.entity.member.Member;
//import seniorWeb.TodoList.domain.exception.SecurityUser;
//import seniorWeb.TodoList.domain.repository.MemberRepository;
//
//import java.util.Optional;
//
//
//@Slf4j
//@Component
//@RequiredArgsConstructor
//// username 이 있는지 확인하는 loadUserByUsername 작성
//public class UserDetailsServiceImpl implements UserDetailsService {
//    private final MemberRepository memberRepository;
//
//    @Override
//    // username 이 유효하지 않으면 예외 / 유효하면 username 으로 찾아온 Member이용해 SecurityUser 생성 반환
//    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
//        Optional<Member> findMember = memberRepository.findByUsername(username);
//        if(!findMember.isPresent()) throw new UsernameNotFoundException("존재하지않는 Username 입니다.");
//
//        log.info("loadUserByUsername member.username = {}",username);
//
//        return new SecurityUser(findMember.get());
//    }
//}
