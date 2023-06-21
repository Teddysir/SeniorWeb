package seniorWeb.TodoList.domain.controller.memo;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.dto.Memo.MemoSaveRequestDto;
import seniorWeb.TodoList.domain.dto.Memo.MemoUpdateRequestDto;
import seniorWeb.TodoList.domain.entity.memo.Memo;
import seniorWeb.TodoList.domain.service.MemoService;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class MemoController {
    private final MemoService memoService;

    @PostMapping("/memos")
    public ResponseEntity<String> createMemo(@RequestBody MemoSaveRequestDto requestDto){
        memoService.createMemo(requestDto);
        return ResponseEntity.ok("등록되었습니다.");
    }

    @GetMapping("/memos")
    public List<Memo> findAllMemo() {
        return memoService.findAllMemo();
    }

    @PutMapping("/memos/{id}")
    public ResponseEntity<String> updateMemo(@PathVariable Long id, @RequestBody MemoUpdateRequestDto requestDto){
        memoService.updateMemo(id,requestDto);
        return ResponseEntity.ok("수정되었습니다.");
    }

    @DeleteMapping("/memos/{id}")
    public ResponseEntity<String> deleteMemo(@PathVariable Long id){
        memoService.deleteMemo(id);
        return ResponseEntity.ok("삭제되었습니다.");
    }
}
