import os
import sys
    # 🔥 [마법의 3줄] 윈도우 환경에서 한글/일본어 통신 에러(ASCII)를 막아주는 설정
os.environ["PYTHONUTF8"] = "1"
if sys.stdout.encoding.lower() != 'utf-8':
    sys.stdout.reconfigure(encoding='utf-8')

import shutil
import datetime
from pathlib import Path
from google import genai # ⬅️ 최신 라이브러리로 변경!

# ==========================================
# 1. API 설정
# ==========================================
API_KEY = "AIzaSyBpf2uLaBiaPIDJv5uRjISJri8klQlO1Zw"
# 최신 구글 GenAI 클라이언트 설정
client = genai.Client(api_key=API_KEY)

# ==========================================
# 2. 경로 설정 (핵심 수정 사항!)
# ==========================================
# 터미널 위치와 상관없이, 이 파이썬 코드가 있는 폴더를 기준점으로 잡습니다.
BASE_DIR = Path(__file__).parent
TARGET_FOLDER = BASE_DIR / "test_folder"

# ==========================================
# 3. AI를 통한 카테고리(폴더명) 추출
# ==========================================
def get_category_from_ai(file_name, extension):
    if not extension:
        return "기타_확장자없음"
    
    prompt = f"""
    당신은 파일 정리 도우미입니다. 다음 파일의 이름과 확장자를 보고, 이 파일을 넣을 가장 적절한 '폴더 이름' 딱 1개만 출력하세요.
    (예: 사진, 업무문서, 개인자료, 백업, 동영상, 프로그래밍, 엑셀데이터 등)
    
    파일명: {file_name}
    확장자: {extension}
    
    주의: 부연 설명 없이 딱 '폴더 이름'만 대답하세요. 특수문자나 띄어쓰기는 빼주세요.
    """
    try:
        # 최신 패키지의 API 호출 방식
        response = client.models.generate_content(
            model='gemini-2.5-flash', # 최신 모델 적용
            contents=prompt,
        )
        folder_name = response.text.strip().replace("/", "_").replace("\\", "_")
        return folder_name
    except Exception as e:
        print(f"AI 통신 오류: {e}")
        return "기타_분류실패"

# ==========================================
# 4. 메인 로직: 폴더 생성 및 파일 이동
# ==========================================
def organize_and_move_files():
    # 이제 무조건 이력서 폴더 안의 test_folder를 가리킵니다.
    target_path = TARGET_FOLDER
    
    files_to_move = [f for f in target_path.iterdir() if f.is_file()]
    
    if not files_to_move:
        print(f"⚠️ '{target_path}' 폴더 안에 정리할 파일이 없습니다!")
        print("테스트용 파일을 몇 개 넣고 다시 실행해주세요.")
        return

    print(f"총 {len(files_to_move)}개의 파일 정리를 시작합니다...\n")

    for item in files_to_move:
        name = item.name
        ext = item.suffix
        
        # 파일 생성 연도 추출
        created_timestamp = item.stat().st_ctime
        year = datetime.datetime.fromtimestamp(created_timestamp).strftime('%Y년')
        
        # AI로 폴더명 받아오기
        print(f"[{name}] 분석 및 이동 중...", end=" ")
        category = get_category_from_ai(name, ext)
        
        # 새 폴더 경로 조립 
        new_folder_path = BASE_DIR / year / category
        new_folder_path.mkdir(parents=True, exist_ok=True)
        
        # 파일 이동
        destination = new_folder_path / name
        shutil.move(str(item), str(destination))
        
        print(f"👉 '{year}/{category}' 폴더로 이동 완료!")

    print("\n✅ 물리적인 파일 이동 및 하위 폴더 정리가 완벽하게 끝났습니다!")

# ==========================================
# 5. 실행부
# ==========================================
if __name__ == "__main__":
    if not TARGET_FOLDER.exists():
        TARGET_FOLDER.mkdir(parents=True, exist_ok=True)
        print(f"📁 '{TARGET_FOLDER}' 폴더를 새로 만들었습니다.")
        print("💡 여기에 정리하고 싶은 파일들을 넣은 뒤, 이 파이썬 스크립트를 한 번 더 실행해주세요!")
    else:
        organize_and_move_files()