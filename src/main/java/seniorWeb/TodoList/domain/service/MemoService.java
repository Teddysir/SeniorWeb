package seniorWeb.TodoList.domain.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import seniorWeb.TodoList.domain.dto.MemoSaveRequestDto;
import seniorWeb.TodoList.domain.dto.MemoUpdateRequestDto;
import seniorWeb.TodoList.domain.entity.Memo;
import seniorWeb.TodoList.domain.repository.MemoRepository;

import javax.transaction.Transactional;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemoService {
    private final MemoRepository memoRepository;

    @Transactional
    public Long createMemo(MemoSaveRequestDto requestDto){
        return memoRepository.save(requestDto.toEntity()).getId();
        // 새로운 메모를 저장하고 저장된 entity값을 Id(Long)로 반환하는거임!
    }

    @Transactional
    public List<Memo> findAllMemo() {
        return memoRepository.findAllByOrderByModifiedAtDesc();
        //내림차순으로 모든 메모 내용을 찾는다.
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
