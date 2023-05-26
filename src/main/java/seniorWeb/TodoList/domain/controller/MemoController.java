package seniorWeb.TodoList.domain.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import seniorWeb.TodoList.domain.dto.MemoSaveRequestDto;
import seniorWeb.TodoList.domain.dto.MemoUpdateRequestDto;
import seniorWeb.TodoList.domain.entity.memo.Memo;
import seniorWeb.TodoList.domain.service.MemoService;

import java.util.List;

@RestController // end포인트임을 알리고 JSON형식의 응답으로 변환되어서 클라이언트로 전달
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
        System.out.println("hello");
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
