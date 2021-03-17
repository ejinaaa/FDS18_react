import Logo from '../../components/Logo/Logo';
import IconInput from '../../components/IconInput/IconInput';
import Button from '../../components/Button/Button';
import AutoSignInCheckbox from '../../components/AutoSignInCheckbox/AutoSignInCheckbox';
import { ReactComponent as Arrow } from './images/arrow.svg';
import './SignIn.scss';

const SignIn = () => (
  <>
    <Logo title="쿠팡 로고 컬러" type="colorful" className="logoLink" />
    <form className="formContainer">
      <IconInput
        iconTitle="letter 아이콘"
        iconShape="letter"
        inputType="email"
        inputVisible="default"
        placeholder="아이디(이메일)"
        className="iconInputContainer"
      />
      <IconInput
        iconTitle="lock 아이콘"
        iconShape="lock"
        inputType="password"
        inputVisible="false"
        placeholder="비밀번호"
        className="iconInputContainer"
      />
      <div className="middle">
        <AutoSignInCheckbox className="autoSignInCheckbox" />
        <a href="/" className="link">
          아이디(이메일)/비밀번호 찾기
          <Arrow className="arrow" />
        </a>
      </div>
      <Button
        type="button"
        mode="primary"
        disabled={false}
        content="로그인"
        className="button"
      />
      <span className="line"></span>
      <Button
        type="button"
        mode="secondary"
        disabled={false}
        content="회원가입"
        className="button"
      />
      <p className="copyright">ⓒCoupang Corp. All rights reserved.</p>
    </form>
  </>
);

export default SignIn;
