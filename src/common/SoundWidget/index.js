import React, { useEffect, useState } from "react";
import Icon from "../ui/Icon";
import { getIconImageSrc } from "../../utils/path";
import song from "../../data/wot.mp3";
import styled from "styled-components";

const SoundIcon = styled(Icon)`
  cursor: pointer;
`;

const audio = new Audio(song);

export default function SoundWidget() {
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    (async function () {
      await handlePlay();
    })();
  }, []);

  const handlePause = () => {
    setPlaying(false);
    audio.pause();
  };

  const handlePlay = async () => {
    if (playing) {
      handlePause();
    } else {
      try {
        setPlaying(true);
        await audio.play();
      } catch (e) {
        handlePause();
      }
    }
  };

  const iconType = playing ? "play" : "stop";
  return (
    <SoundIcon
      className="sound-btn"
      onClick={handlePlay}
      src={getIconImageSrc(iconType)}
      alt="controls"
    />
  );
}
