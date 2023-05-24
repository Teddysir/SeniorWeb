//package seniorWeb.TodoList.domain.exception;
//
//import lombok.Getter;
//import lombok.Setter;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.security.core.authority.AuthorityUtils;
//import org.springframework.security.core.userdetails.User;
//import seniorWeb.TodoList.domain.entity.member.Member;
//
//
//// User클래스 커스텀 - spring security가 제공하는 User 클래스를 내가정의한 Member로 사용하기위함
//
//@Slf4j
//@Getter
//@Setter
//public class SecurityUser extends User {
//
//    private Member member;
//
//    public SecurityUser(Member member){
//        // super 키워드를 이용해서 부모클래스의 생성자로 username,password,role 사용
//        super(member.getUsername(), member.getPassword(), AuthorityUtils.createAuthorityList(member.getMemberRole().toString()));
//
//        log.info("Security member.username = {}",member.getUsername());
//        log.info("SecurityUser member.password = {}", member.getPassword());
//        log.info("SecurityUser member.role = {}", member.getMemberRole().toString());
//
//        this.member = member;
//    }
//
//}
