package seniorWeb.TodoList.domain.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemoUpdateRequestDto {
    private String name;
    private String content;

    public MemoUpdateRequestDto(String name, String content){
        this.name = name;
        this.content = content;
    }
}
