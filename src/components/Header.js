import React from 'react';
import styled from 'styled-components';
import rioBg from '../assets/rio-2016.jpg';
import londonBg from '../assets/london-2012.jpg';
import rioFlag from '../assets/rio-flag.jpeg';
import londonFlag from '../assets/london-flag.png';

const Header = () => {
  return (
    <HeaderWrap>
      <LayerBottom>
        <ContentWrap>
          <BottomContent>
            <FlagImg src={rioFlag} alt="rio" />
          </BottomContent>
        </ContentWrap>
      </LayerBottom>
      <LayerTop>
        <TopContentWrap>
          <TopContent>
            <FlagImg src={londonFlag} alt="london" />
          </TopContent>
        </TopContentWrap>
      </LayerTop>
      <Versus>VS</Versus>
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  font-size: 18px;
  font-weight: 300;
  overflow: hidden;
  z-index: 100;
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 100;
`;

const ContentWrap = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`;

const ContentBody = styled.div`
  position: absolute;
  text-align: center;
`;

const LayerBottom = styled(Layer)`
  background: url(${rioBg}) no-repeat;
  background-size: cover;
  z-index: 101;
`;

const BottomContent = styled(ContentBody)`
  right: 15%;
`;

const LayerTop = styled(Layer)`
  background: url(${londonBg}) no-repeat;
  background-size: cover;
  background-position: 30% 15%;
  color: #222;
  z-index: 102;
  width: 100%;
  transform: skew(-20deg);
  margin-left: -50%;
`;

const TopContentWrap = styled(ContentWrap)`
  transform: skew(20deg);
  width: 100%;
`;

const TopContent = styled(ContentBody)`
  left: 65%;
  color: #222;
`;

const Versus = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 100px;
  font-weight: 700;
  z-index: 103;
`;

const FlagImg = styled.img`
  width: 140px;
`;

export default Header;
