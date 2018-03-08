-- 회원 기본 인증 정보
-- 핸드폰번호 / 국가번호 / 이메일 / 비밀번호 / 이름(닉네임) 까지는 기본값으로 들어가려합니다.
-- 핸드폰번호 혹은 이메일 中 하나를 로그인ID로 사용하면 될 것 같습니다. (즉, 둘 다 옵션값)


-- moon : App ID 가 별도로 있어야 할 듯 합니다. 셀레브, 온다 등등의 구분이 가능 한.

------- type과 관련된 설명

-- 관리자, 셀레버도 account 테이블로 가입시키려합니다. type으로 구분하려하며, type으로 구분되는 것은 프로젝트마다 다를 수 있습니다.
-- 예를들어, 셀레브에서는 type=1은 일반회원, type=2는 관리자, type=3은 셀레버 / 바르게온다에서는 type=1은 일반회원, type=2는 슈퍼마켓점주, type=3은 본사관리자

-- moon : account 는 공통으로 가는데, type 은 서비스별로 달라서, 위에 올려놓은 것 처럼, 이부분에 대한 고려가 좀 필요할 듯 합니다. 

DROP TABLE IF EXISTS account;
CREATE TABLE account (
userId       int(12) NOT NULL AUTO_INCREMENT,
phoneNumber   VARCHAR(30)  CHARACTER SET utf8mb4 NOT NULL,
email     VARCHAR(50)  CHARACTER SET utf8mb4 NOT NULL,
password  VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL,
name    VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL,
countryCode INTEGER(5) UNSIGNED DEFAULT 0,
type     int(3) NOT NULL DEFAULT 0 COMMENT "0=일반사용자, 1=관리자, 2=",
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ('userId'),
UNIQUE KEY userId_UNIQUE ('userId'),
);


-- 회원 소셜 인증 정보
-- [요청사항] account의 userId를 foreignKey로 물면 좋을 것 같습니다.
-- [알림사항] 셀레브부터는 여러 소셜네트워크를 한 개의 계정에 연동할 수가 있습니다.

-- moon : PK 는 있어야 하니, userId, type 으로 묶으면 될 듯 해요

DROP TABLE IF EXISTS account_social;
CREATE TABLE account_social (
userId    int(12) NOT NULL,
type      ENUM("F", "N", "K") NOT NULL COMMENT "Facebook, Naver, Kakao",
id         VARCHAR(50)  CHARACTER SET utf8mb4 NOT NULL COMMENT "소셜계정의 ID값이 들어간다.",
token      VARCHAR(500) CHARACTER SET utf8mb4 DEFAULT NULL,
createdAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT 'userId_account_social' FOREIGN KEY ('userId') REFERENCES account ('userId') ON DELETE CASCADE ON UPDATE CASCADE
);



-- 회원의 권한
-- [알림사항] 서비스마다 상세정보 값이 다를텐데, Account모듈은 1개만 쓰기 때문에 구조를 어떻게 할지가 고민입니다.
DROP TABLE IF EXISTS account_permission;
CREATE TABLE account_permission (
userId    int(12) NOT NULL,
updatedAt  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
UNIQUE KEY userId_UNIQUE ('userId'),
CONSTRAINT 'userId_account_permission' FOREIGN KEY ('userId') REFERENCES account ('userId') ON DELETE CASCADE ON UPDATE CASCADE
);

-- 팔로잉/팔로워
DROP TABLE IF EXISTS account_follow;
CREATE TABLE account_follow (
userIdFrom   int(12) NOT NULL COMMENT "팔로우하는 사람의 id",
userIdTo      int(12) NOT NULL COMMENT "팔로우 당한 사람의 id",
createdAt     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT 'userIdFrom_account_follow' FOREIGN KEY ('userIdFrom') REFERENCES account ('userId') ON DELETE CASCADE ON UPDATE CASCADE,
CONSTRAINT 'userIdTo_account_follow' FOREIGN KEY ('userIdTo') REFERENCES account ('userId') ON DELETE CASCADE ON UPDATE CASCADE
);

-- 신고하기
DROP TABLE IF EXISTS account_report;
CREATE TABLE account_report (
userId   int(12) COMMENT "신고한 사람의 id (로그인 안한 상태에서 신고하면 Null일 수도 있음)",
'table'  varchar(30) DEFAULT NULL COMMENT "테이블 명. (예를들어 account테이블의 contentId를 신고한다면, 'account'가 됨)",
contentId VARCHAR(50)  CHARACTER SET utf8mb4 COMMENT "신고하는 콘텐츠의 id",
service   VARCHAR(50)  CHARACTER SET utf8mb4 COMMENT "신고한 서비스 명 (하나의 계정시스템으로 여러 서비스를 돌릴 경우 필요함)",
'type'   int(4) unsigned DEFAULT NULL,
description   text,
createdAt     TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT 'userId_account_report' FOREIGN KEY ('userId') REFERENCES account ('userId') ON DELETE CASCADE ON UPDATE CASCADE,
);

--------------------------------------------
------------------- Logs -------------------
--------------------------------------------
-- 문자 인증 정보 (기록용)
DROP TABLE IF EXISTS account_phoneVerification;
CREATE TABLE account_phoneVerification (
countryCode INTEGER(5) UNSIGNED DEFAULT 0,
phoneNumber   VARCHAR(30) CHARACTER SET utf8mb4 NOT NULL,
code      VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
);

-- 이메일 인증 정보 (기록용)
DROP TABLE IF EXISTS account_emailVerification;
CREATE TABLE account_emailVerification (
email     VARCHAR(200) CHARACTER SET utf8mb4 NOT NULL,
code      VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 로그인 기록
DROP TABLE IF EXISTS account_loginHistory;
CREATE TABLE account_loginHistory (
userId   int(12) NOT NULL,
ip        VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL,
country   VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL,
longitude float,
latitude  float,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);