package seniorWeb.TodoList.domain.dto.Memo;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import seniorWeb.TodoList.domain.entity.memo.Memo;

@Getter
@NoArgsConstructor
public class MemoSaveRequestDto {
    private String name;
    private String content;

    @Builder
    public MemoSaveRequestDto(String name, String content){
        this.name = name;
        this.content = content;
    }

    public Memo toEntity() {
        return Memo.builder()
                .name(name)
                .content(content)
                .build();
    }
}
