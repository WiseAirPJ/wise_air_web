import "./FlightSearch.scss";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import HandMovingButton from "@/components/buttons/HandMovingButton";
import FlightSearchSmall from "./FlightSearchSmall";
import FlightSearchBig from "./FlightSearchBig";
import classNames from "classnames";

const COLLAPSED_H = 140; // 닫힌 높이(px) - Small 보이는 상태
const EXPANDED_H = 510; // 열린 높이(px) - Big 보이는 상태
const SNAP_RATIO = 0.5; // 0~1 사이. 이 비율 이상이면 Big로 스냅

const FlightSearch = () => {
  const [inputs, setInputs] = useState({
    passengerCount: "1",
    departureAirport: "ICN",
    arrivalAirport: "",
    travelDate: {
      year: moment().format("YYYY"),
      month: moment().format("MM"),
    },
    stayDuration: {
      firstStep: 1,
      secondStep: 2,
    },
  });
  // 패널 상태
  const [panelH, setPanelH] = useState(COLLAPSED_H);
  const [expanded, setExpanded] = useState(false); // false=Small, true=Big
  const [dragging, setDragging] = useState(false);
  const startY = useRef(0);
  const startH = useRef(panelH);

  useEffect(() => {
    setInputs(prev => ({
      ...prev,
      stayDuration: {
        ...prev.stayDuration,
        secondStep: prev.stayDuration.firstStep + 1,
      },
    }));
  }, [inputs.stayDuration.firstStep]);

  // 드래그 시작
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    setDragging(true);
    startY.current = e.clientY;
    startH.current = panelH;
    document.body.style.userSelect = "none";
    document.body.style.cursor = "grabbing";
  };

  // 드래그 중
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    const dy = e.clientY - startY.current; // 아래로 당기면 + (높이 증가)
    let nh = startH.current + dy;
    if (nh < COLLAPSED_H) nh = COLLAPSED_H;
    if (nh > EXPANDED_H) nh = EXPANDED_H;
    setPanelH(nh);

    // 드래그 중에도 실시간으로 컴포넌트 전환 느낌을 주고 싶으면 아래 라인 유지
    setExpanded(nh >= COLLAPSED_H + (EXPANDED_H - COLLAPSED_H) * SNAP_RATIO);
  };

  // 드래그 끝
  const onPointerUp = () => {
    setDragging(false);
    document.body.style.userSelect = "";
    document.body.style.cursor = "";

    const shouldExpand = panelH >= COLLAPSED_H + (EXPANDED_H - COLLAPSED_H) * SNAP_RATIO;
    setExpanded(shouldExpand);
    setPanelH(shouldExpand ? EXPANDED_H : COLLAPSED_H); // 스냅 애니메이션
  };

  return (
    <div
      className={classNames("flight_inputs", {
        "is-expanded": expanded,
        "is-collapsed": !expanded,
        "is-dragging": dragging,
      })}
      style={{
        height: panelH,
        transition: dragging ? "none" : "height .25s ease",
      }}
    >
      {expanded ? (
        <FlightSearchBig inputs={inputs} setInputs={setInputs} />
      ) : (
        <FlightSearchSmall inputs={inputs} setInputs={setInputs} />
      )}
      <HandMovingButton
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      />
    </div>
  );
};

export default FlightSearch;
