package seniorWeb.TodoList.domain.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@Getter
@Entity
@Table(name = "memo")
public class Memo extends Timestamped{

    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Id
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String content;

    @Builder
    public Memo(String name, String content){
        this.content = content;
        this.name = name;
    }

    public void update(String name, String content){
        this.content = content;
        this.name = name;
    }
}
