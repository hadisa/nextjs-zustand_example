import {
  AUTH_USER_ID,
  CHANEL_ID,
  CHANNEL_NAME,
  CHANNEL_SLUG,
  CLOCK_IN_STATUS,
  END_TIME,
  START_TIME,
} from "@/type/constant";
import { create } from "zustand";

interface State {
  authUserId: string | null;
  setAuthUserId: (id: string) => void;
  groupManageId: string | null;
  setGroupManageId: (id: string | null) => void;
  currentChannelName: string | null;
  setCurrentChannelName: (name: string) => void;
  currentChannelID: string | null;
  setCurrentChannelID: (id: string) => void;
  currentChannelSlug: string | null;
  setCurrentChannelSlug: (slug: string) => void;
  currentStartDateSelected: string | null;
  setCurrentStartDateSelected: (date: string) => void;
  currentEndDateSelected: string | null;
  setCurrentEndDateSelected: (date: string) => void;
  isCopy: boolean;
  setIsCopy: (copy: boolean) => void;
  timeRecordStatus: string | null;
  setTimeRecordStatus: (status: string) => void;
  currentTimeCardId: string | null;
  setCurrentTimeCardId: (id: string | null) => void;
  currentTimeCardStatus: string | null;
  setCurrentTimeCardStatus: (status: string | null) => void;
  resourceSchedularComponent: any[];
  setResourceSchedularComponent: (component: any[]) => void;
  taskSchedularComponent: any[];
  setTaskSchedularComponent: (component: any[]) => void;
  isLoadSchedularComponent: boolean | null;
  setIsLoadSchedularComponent: (load: boolean | null) => void;
}

export const useStore = create<State>((set) => ({
  authUserId: AUTH_USER_ID,
  setAuthUserId: (id) => set({ authUserId: id }),
  groupManageId: null,
  setGroupManageId: (id) => set({ groupManageId: id }),
  currentChannelName: CHANNEL_NAME,
  setCurrentChannelName: (name) => set({ currentChannelName: name }),
  currentChannelID: CHANEL_ID,
  setCurrentChannelID: (id) => set({ currentChannelID: id }),
  currentChannelSlug: CHANNEL_SLUG,
  setCurrentChannelSlug: (slug) => set({ currentChannelSlug: slug }),
  currentStartDateSelected: START_TIME,
  setCurrentStartDateSelected: (date) =>
    set({ currentStartDateSelected: date }),
  currentEndDateSelected: END_TIME,
  setCurrentEndDateSelected: (date) => set({ currentEndDateSelected: date }),
  isCopy: false,
  setIsCopy: (copy) => set({ isCopy: copy }),
  timeRecordStatus: CLOCK_IN_STATUS,
  setTimeRecordStatus: (status) => set({ timeRecordStatus: status }),
  currentTimeCardId: null,
  setCurrentTimeCardId: (id) => set({ currentTimeCardId: id }),
  currentTimeCardStatus: null,
  setCurrentTimeCardStatus: (status) => set({ currentTimeCardStatus: status }),
  resourceSchedularComponent: [],
  setResourceSchedularComponent: (component) =>
    set({ resourceSchedularComponent: component }),
  taskSchedularComponent: [],
  setTaskSchedularComponent: (component) =>
    set({ taskSchedularComponent: component }),
  isLoadSchedularComponent: null,
  setIsLoadSchedularComponent: (load) =>
    set({ isLoadSchedularComponent: load }),
}));
