//package seniorWeb.TodoList.domain.config;
//
//import lombok.RequiredArgsConstructor;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import seniorWeb.TodoList.domain.service.UserDetailsServiceImpl;
//
//@RequiredArgsConstructor
//@EnableWebSecurity
//public class SecurityConfig {
//
//    private final UserDetailsServiceImpl userDetailsService;
//
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable();
//        http.authorizeRequests()
//                .antMatchers("/", "/registry","/login","/css/**").permitAll()
//                .antMatchers("/member/**").authenticated()
//                .antMatchers("/manger/**").hasAnyRole("MANAGER","ADMIN")
//                .antMatchers("/admin/**").hasRole("ADMIN");
//        http.formLogin().loginPage("/login").defaultSuccessUrl("/",true);
//        http.formLogin().loginProcessingUrl("/login").defaultSuccessUrl("/",true);
//        http.exceptionHandling().accessDeniedPage("/forbidden");
//        http.logout().logoutUrl("/logout").logoutSuccessUrl("/");
//
//        http.userDetailsService(userDetailsService);
//    }
//}
