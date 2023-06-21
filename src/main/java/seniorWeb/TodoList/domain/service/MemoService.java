package seniorWeb.TodoList.domain.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seniorWeb.TodoList.domain.entity.memo.Memo;
import seniorWeb.TodoList.domain.repository.MemoRepository;
import seniorWeb.TodoList.domain.dto.Memo.MemoSaveRequestDto;
import seniorWeb.TodoList.domain.dto.Memo.MemoUpdateRequestDto;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoService {
    private final MemoRepository memoRepository;

    @Transactional
    public Long createMemo(MemoSaveRequestDto requestDto){
        return memoRepository.save(requestDto.toEntity()).getId();
    }

    @Transactional
    public List<Memo> findAllMemo() {
        return memoRepository.findAllByOrderByModifiedAtDesc();
    }

    @Transactional
    public Long updateMemo(Long id, MemoUpdateRequestDto requestDto) {
        Memo memo = memoRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 메모가 존재하지 않습니다. id=" + id)
        );
        memo.update(requestDto.getName(), requestDto.getContent());
        return id;
    }

    @Transactional
    public void deleteMemo(Long id){
        Memo memo = memoRepository.findById(id).orElseThrow(
                () -> new IllegalArgumentException("해당 메모가 존재하지 않습니다. id="+id)
        );
        memoRepository.delete(memo);

    }
}
