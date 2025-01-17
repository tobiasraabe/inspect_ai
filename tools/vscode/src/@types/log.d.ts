/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Version = number;
export type Status = "started" | "success" | "cancelled" | "error";
export type RunId = string;
export type Created = string;
export type Task = string;
export type TaskId = string;
export type TaskVersion = number;
export type TaskFile = string | null;
export type Solver = string | null;
export type SolverArgs = {} | null;
export type Tags = string[] | null;
export type Name = string | null;
export type Location = string | null;
export type Samples = number | null;
export type SampleIds = (number | string)[] | null;
export type Shuffled = boolean | null;
/**
 * @minItems 1
 * @maxItems 2
 */
export type SandboxEnvironmentSpec = [unknown] | [unknown, unknown];
export type Model = string;
export type ModelBaseUrl = string | null;
export type Limit = number | [unknown, unknown] | null;
export type SampleId = string | number | (string | number)[] | null;
export type Epochs = number | null;
export type EpochsReducer = string[] | null;
export type Name1 = string;
export type Tools = string | string[];
export type Approvers = ApproverPolicyConfig[];
export type FailOnError = boolean | number | null;
export type MessageLimit = number | null;
export type TokenLimit = number | null;
export type TimeLimit = number | null;
export type MaxSamples = number | null;
export type MaxTasks = number | null;
export type MaxSubprocesses = number | null;
export type MaxSandboxes = number | null;
export type SandboxCleanup = boolean | null;
export type LogSamples = boolean | null;
export type LogImages = boolean | null;
export type LogBuffer = number | null;
export type ScoreDisplay = boolean | null;
export type Type = "git";
export type Origin = string;
export type Commit = string;
export type Metadata = {} | null;
export type Name2 = string;
export type Solver1 = string;
export type Steps = EvalPlanStep[];
export type MaxRetries = number | null;
export type Timeout = number | null;
export type MaxConnections = number | null;
export type SystemMessage = string | null;
export type MaxTokens = number | null;
export type TopP = number | null;
export type Temperature = number | null;
export type StopSeqs = string[] | null;
export type BestOf = number | null;
export type FrequencyPenalty = number | null;
export type PresencePenalty = number | null;
export type LogitBias = {
  [k: string]: number;
} | null;
export type Seed = number | null;
export type Suffix = string | null;
export type TopK = number | null;
export type NumChoices = number | null;
export type Logprobs = boolean | null;
export type TopLogprobs = number | null;
export type ParallelToolCalls = boolean | null;
export type InternalTools = boolean | null;
export type MaxToolOutput = number | null;
export type CachePrompt = "auto" | boolean | null;
export type ReasoningEffort = ("low" | "medium" | "high") | null;
export type TotalSamples = number;
export type CompletedSamples = number;
export type Name3 = string;
export type Scorer = string;
export type Reducer = string | null;
export type Name4 = string;
export type Value = number;
export type Metadata1 = {} | null;
export type Metadata2 = {} | null;
export type Scores = EvalScore[];
export type Metadata3 = {} | null;
export type StartedAt = string;
export type CompletedAt = string;
export type InputTokens = number;
export type OutputTokens = number;
export type TotalTokens = number;
export type InputTokensCacheWrite = number | null;
export type InputTokensCacheRead = number | null;
export type Message = string;
export type Traceback = string;
export type TracebackAnsi = string;
export type Samples1 = EvalSample[] | null;
export type Id = number | string;
export type Epoch = number;
export type Input =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Content =
  | string
  | (ContentText | ContentImage | ContentAudio | ContentVideo)[];
export type Type1 = "text";
export type Text = string;
export type Type2 = "image";
export type Image = string;
export type Detail = "auto" | "low" | "high";
export type Type3 = "audio";
export type Audio = string;
export type Format = "wav" | "mp3";
export type Type4 = "video";
export type Video = string;
export type Format1 = "mp4" | "mpeg" | "mov";
export type Source = ("input" | "generate") | null;
export type Role = "system";
export type Content1 =
  | string
  | (ContentText | ContentImage | ContentAudio | ContentVideo)[];
export type Source1 = ("input" | "generate") | null;
export type Role1 = "user";
export type ToolCallId = string | null;
export type Content2 =
  | string
  | (ContentText | ContentImage | ContentAudio | ContentVideo)[];
export type Source2 = ("input" | "generate") | null;
export type Role2 = "assistant";
export type ToolCalls = ToolCall[] | null;
export type Id1 = string;
export type Function = string;
export type Type5 = "function";
export type ParseError = string | null;
export type Title = string | null;
export type Format2 = "text" | "markdown";
export type Content3 = string;
export type Content4 =
  | string
  | (ContentText | ContentImage | ContentAudio | ContentVideo)[];
export type Source3 = ("input" | "generate") | null;
export type Role3 = "tool";
export type ToolCallId1 = string | null;
export type Function1 = string | null;
export type Type6 =
  | "parsing"
  | "timeout"
  | "unicode_decode"
  | "permission"
  | "file_not_found"
  | "is_a_directory"
  | "output_limit"
  | "approval"
  | "unknown";
export type Message1 = string;
export type Choices = string[] | null;
export type Target = string | string[];
export type Files = string[] | null;
export type Setup = string | null;
export type Messages = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Model1 = string;
export type StopReason =
  | "stop"
  | "max_tokens"
  | "model_length"
  | "tool_calls"
  | "content_filter"
  | "unknown";
export type Token = string;
export type Logprob1 = number;
export type Bytes = number[] | null;
export type TopLogprobs1 = TopLogprob[] | null;
export type Token1 = string;
export type Logprob2 = number;
export type Bytes1 = number[] | null;
export type Content5 = Logprob[];
export type Choices1 = ChatCompletionChoice[];
export type Time = number | null;
export type Metadata4 = {} | null;
export type Error = string | null;
export type Scores1 = {
  [k: string]: Score;
} | null;
export type Value1 =
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | {
      [k: string]: string | number | boolean | null;
    };
export type Answer = string | null;
export type Explanation = string | null;
export type Metadata5 = {} | null;
export type Timestamp = string;
export type Pending = boolean | null;
export type Event = "sample_init";
export type Input1 =
  | string
  | (
      | ChatMessageSystem
      | ChatMessageUser
      | ChatMessageAssistant
      | ChatMessageTool
    )[];
export type Choices2 = string[] | null;
export type Target1 = string | string[];
export type Id2 = number | string | null;
export type Metadata7 = {} | null;
export type Files1 = {
  [k: string]: string;
} | null;
export type Setup1 = string | null;
export type JsonValue = unknown;
export type Timestamp1 = string;
export type Pending1 = boolean | null;
export type Event1 = "sample_limit";
export type Type7 = "message" | "time" | "token" | "operator" | "custom";
export type Message2 = string;
export type Limit1 = number | null;
export type Timestamp2 = string;
export type Pending2 = boolean | null;
export type Event2 = "state";
export type Op = "remove" | "add" | "replace" | "move" | "test" | "copy";
export type Path = string;
export type From = string | null;
export type Changes = JsonChange[];
export type Timestamp3 = string;
export type Pending3 = boolean | null;
export type Event3 = "store";
export type Changes1 = JsonChange[];
export type Timestamp4 = string;
export type Pending4 = boolean | null;
export type Event4 = "model";
export type Model2 = string;
export type Input2 = (
  | ChatMessageSystem
  | ChatMessageUser
  | ChatMessageAssistant
  | ChatMessageTool
)[];
export type Name5 = string;
export type Description = string;
export type Type8 = "object";
export type Type9 =
  | ("string" | "integer" | "number" | "boolean" | "array" | "object" | "null")
  | null;
export type Description1 = string | null;
export type Enum = unknown[] | null;
export type Properties1 = {
  [k: string]: ToolParam;
} | null;
export type Additionalproperties = ToolParam | boolean | null;
export type Anyof = ToolParam[] | null;
export type Required = string[] | null;
export type Required1 = string[];
export type Additionalproperties1 = boolean;
export type Tools1 = ToolInfo[];
export type ToolChoice = ("auto" | "any" | "none") | ToolFunction;
export type Name6 = string;
export type Cache = ("read" | "write") | null;
export type Timestamp5 = string;
export type Pending5 = boolean | null;
export type Event5 = "tool";
export type Type10 = "function";
export type Id3 = string;
export type Function2 = string;
export type Result =
  | string
  | number
  | boolean
  | ContentText
  | ContentImage
  | ContentAudio
  | ContentVideo
  | (ContentText | ContentImage | ContentAudio | ContentVideo)[];
export type Truncated = [unknown, unknown] | null;
export type Timestamp6 = string;
export type Pending6 = boolean | null;
export type Event6 = "approval";
export type Message3 = string;
export type Approver = string;
export type Decision =
  | "approve"
  | "modify"
  | "reject"
  | "escalate"
  | "terminate";
export type Explanation1 = string | null;
export type Timestamp7 = string;
export type Pending7 = boolean | null;
export type Event7 = "input";
export type Input3 = string;
export type InputAnsi = string;
export type Timestamp8 = string;
export type Pending8 = boolean | null;
export type Event8 = "score";
export type Target2 = string | string[] | null;
export type Timestamp9 = string;
export type Pending9 = boolean | null;
export type Event9 = "error";
export type Timestamp10 = string;
export type Pending10 = boolean | null;
export type Event10 = "logger";
export type Name7 = string | null;
export type Level =
  | "debug"
  | "http"
  | "sandbox"
  | "info"
  | "warning"
  | "error"
  | "critical";
export type Message4 = string;
export type Created1 = number;
export type Filename = string;
export type Module = string;
export type Lineno = number;
export type Timestamp11 = string;
export type Pending11 = boolean | null;
export type Event11 = "info";
export type Timestamp12 = string;
export type Pending12 = boolean | null;
export type Event12 = "step";
export type Action = "begin" | "end";
export type Type11 = string | null;
export type Name8 = string;
export type Timestamp13 = string;
export type Pending13 = boolean | null;
export type Event13 = "subtask";
export type Name9 = string;
export type Type12 = string | null;
export type Events2 = (
  | SampleInitEvent
  | SampleLimitEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type Events1 = (
  | SampleInitEvent
  | SampleLimitEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type Events = (
  | SampleInitEvent
  | SampleLimitEvent
  | StateEvent
  | StoreEvent
  | ModelEvent
  | ToolEvent
  | ApprovalEvent
  | InputEvent
  | ScoreEvent
  | ErrorEvent
  | LoggerEvent
  | InfoEvent
  | StepEvent
  | SubtaskEvent
)[];
export type Type13 =
  | "context"
  | "time"
  | "message"
  | "token"
  | "operator"
  | "custom";
export type Limit2 = number;
export type Reductions = EvalSampleReductions[] | null;
export type Scorer1 = string;
export type Reducer1 = string | null;
export type Value2 =
  | string
  | number
  | boolean
  | (string | number | boolean)[]
  | {
      [k: string]: string | number | boolean | null;
    };
export type Answer1 = string | null;
export type Explanation2 = string | null;
export type Metadata8 = {} | null;
export type SampleId1 = string | number | null;
export type Samples2 = EvalSampleScore[];
export type Location1 = string;

export interface EvalLog {
  version?: Version;
  status?: Status;
  eval: EvalSpec;
  plan?: EvalPlan;
  results?: EvalResults | null;
  stats?: EvalStats;
  error?: EvalError | null;
  samples?: Samples1;
  reductions?: Reductions;
  location?: Location1;
}
export interface EvalSpec {
  run_id: RunId;
  created: Created;
  task: Task;
  task_id: TaskId;
  task_version: TaskVersion;
  task_file: TaskFile;
  task_attribs: TaskAttribs;
  task_args: TaskArgs;
  solver: Solver;
  solver_args: SolverArgs;
  tags: Tags;
  dataset: EvalDataset;
  sandbox: SandboxEnvironmentSpec | null;
  model: Model;
  model_base_url: ModelBaseUrl;
  model_args: ModelArgs;
  config: EvalConfig;
  revision: EvalRevision | null;
  packages: Packages;
  metadata: Metadata;
}
export interface TaskAttribs {}
export interface TaskArgs {}
export interface EvalDataset {
  name: Name;
  location: Location;
  samples: Samples;
  sample_ids: SampleIds;
  shuffled: Shuffled;
}
export interface ModelArgs {}
export interface EvalConfig {
  limit: Limit;
  sample_id: SampleId;
  epochs: Epochs;
  epochs_reducer: EpochsReducer;
  approval: ApprovalPolicyConfig | null;
  fail_on_error: FailOnError;
  message_limit: MessageLimit;
  token_limit: TokenLimit;
  time_limit: TimeLimit;
  max_samples: MaxSamples;
  max_tasks: MaxTasks;
  max_subprocesses: MaxSubprocesses;
  max_sandboxes: MaxSandboxes;
  sandbox_cleanup: SandboxCleanup;
  log_samples: LogSamples;
  log_images: LogImages;
  log_buffer: LogBuffer;
  score_display: ScoreDisplay;
}
export interface ApprovalPolicyConfig {
  approvers: Approvers;
}
/**
 * Configuration format for approver policies.
 *
 * For example, here is a configuration in YAML:
 *
 * ```yaml
 * approvers:
 *   - name: human
 *     tools: web_browser*, bash, pyhton
 *     choices: [approve, reject]
 *
 *   - name: auto
 *     tools: *
 *     decision: approve
 * ```
 */
export interface ApproverPolicyConfig {
  name: Name1;
  tools: Tools;
  params: Params;
}
export interface Params {}
export interface EvalRevision {
  type: Type;
  origin: Origin;
  commit: Commit;
}
export interface Packages {
  [k: string]: string;
}
export interface EvalPlan {
  name: Name2;
  steps: Steps;
  finish: EvalPlanStep | null;
  config: GenerateConfig;
}
export interface EvalPlanStep {
  solver: Solver1;
  params: Params1;
}
export interface Params1 {}
/**
 * Base class for model generation configs.
 */
export interface GenerateConfig {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  suffix: Suffix;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
  parallel_tool_calls: ParallelToolCalls;
  internal_tools: InternalTools;
  max_tool_output: MaxToolOutput;
  cache_prompt: CachePrompt;
  reasoning_effort: ReasoningEffort;
}
export interface EvalResults {
  total_samples: TotalSamples;
  completed_samples: CompletedSamples;
  scores: Scores;
  metadata: Metadata3;
}
export interface EvalScore {
  name: Name3;
  scorer: Scorer;
  reducer: Reducer;
  params: Params2;
  metrics: Metrics;
  metadata: Metadata2;
}
export interface Params2 {}
export interface Metrics {
  [k: string]: EvalMetric;
}
export interface EvalMetric {
  name: Name4;
  value: Value;
  options: Options;
  metadata: Metadata1;
}
export interface Options {}
export interface EvalStats {
  started_at: StartedAt;
  completed_at: CompletedAt;
  model_usage: ModelUsage;
}
export interface ModelUsage {
  [k: string]: ModelUsage1;
}
export interface ModelUsage1 {
  input_tokens: InputTokens;
  output_tokens: OutputTokens;
  total_tokens: TotalTokens;
  input_tokens_cache_write: InputTokensCacheWrite;
  input_tokens_cache_read: InputTokensCacheRead;
}
export interface EvalError {
  message: Message;
  traceback: Traceback;
  traceback_ansi: TracebackAnsi;
}
export interface EvalSample {
  id: Id;
  epoch: Epoch;
  input: Input;
  choices: Choices;
  target: Target;
  sandbox: SandboxEnvironmentSpec | null;
  files: Files;
  setup: Setup;
  messages: Messages;
  output: ModelOutput;
  scores: Scores1;
  metadata: Metadata6;
  store: Store;
  events: Events;
  model_usage: ModelUsage2;
  error: EvalError | null;
  attachments: Attachments;
  limit: EvalSampleLimit | null;
}
export interface ChatMessageSystem {
  content: Content;
  source: Source;
  role: Role;
}
export interface ContentText {
  type: Type1;
  text: Text;
}
export interface ContentImage {
  type: Type2;
  image: Image;
  detail: Detail;
}
export interface ContentAudio {
  type: Type3;
  audio: Audio;
  format: Format;
}
export interface ContentVideo {
  type: Type4;
  video: Video;
  format: Format1;
}
export interface ChatMessageUser {
  content: Content1;
  source: Source1;
  role: Role1;
  tool_call_id: ToolCallId;
}
export interface ChatMessageAssistant {
  content: Content2;
  source: Source2;
  role: Role2;
  tool_calls: ToolCalls;
}
export interface ToolCall {
  id: Id1;
  function: Function;
  arguments: Arguments;
  type: Type5;
  parse_error: ParseError;
  view: ToolCallContent | null;
}
export interface Arguments {}
/**
 * Content to include in tool call view.
 */
export interface ToolCallContent {
  title: Title;
  format: Format2;
  content: Content3;
}
export interface ChatMessageTool {
  content: Content4;
  source: Source3;
  role: Role3;
  tool_call_id: ToolCallId1;
  function: Function1;
  error: ToolCallError | null;
}
export interface ToolCallError {
  type: Type6;
  message: Message1;
}
export interface ModelOutput {
  model: Model1;
  choices: Choices1;
  usage: ModelUsage1 | null;
  time: Time;
  metadata: Metadata4;
  error: Error;
}
export interface ChatCompletionChoice {
  message: ChatMessageAssistant;
  stop_reason: StopReason;
  logprobs: Logprobs1 | null;
}
/**
 * Log probability information for a completion choice.
 */
export interface Logprobs1 {
  content: Content5;
}
/**
 * Log probability for a token.
 */
export interface Logprob {
  token: Token;
  logprob: Logprob1;
  bytes: Bytes;
  top_logprobs: TopLogprobs1;
}
/**
 * List of the most likely tokens and their log probability, at this token position.
 */
export interface TopLogprob {
  token: Token1;
  logprob: Logprob2;
  bytes: Bytes1;
}
/**
 * Score generated by a scorer.
 *
 * Args:
 *    value (Value): Score value.
 *    answer (str | None): Answer extracted from model output (optional).
 *    explanation (str | None): Explanation of score (optional).
 *    metadata (dict[str,Any]): Additional metadata related to the score.
 */
export interface Score {
  value: Value1;
  answer: Answer;
  explanation: Explanation;
  metadata: Metadata5;
}
export interface Metadata6 {}
export interface Store {}
/**
 * Beginning of processing a Sample.
 */
export interface SampleInitEvent {
  timestamp: Timestamp;
  pending: Pending;
  event: Event;
  sample: Sample;
  state: JsonValue;
}
export interface Sample {
  input: Input1;
  choices: Choices2;
  target: Target1;
  id: Id2;
  metadata: Metadata7;
  sandbox: SandboxEnvironmentSpec | null;
  files: Files1;
  setup: Setup1;
}
/**
 * The sample was unable to finish processing due to a limit
 */
export interface SampleLimitEvent {
  timestamp: Timestamp1;
  pending: Pending1;
  event: Event1;
  type: Type7;
  message: Message2;
  limit: Limit1;
}
/**
 * Change to the current `TaskState`
 */
export interface StateEvent {
  timestamp: Timestamp2;
  pending: Pending2;
  event: Event2;
  changes: Changes;
}
/**
 * Describes a change to data using JSON Patch format.
 */
export interface JsonChange {
  op: Op;
  path: Path;
  from: From;
  value: {
    [k: string]: unknown;
  };
  replaced: {
    [k: string]: unknown;
  };
}
/**
 * Change to data within the current `Store`.
 */
export interface StoreEvent {
  timestamp: Timestamp3;
  pending: Pending3;
  event: Event3;
  changes: Changes1;
}
/**
 * Call to a language model.
 */
export interface ModelEvent {
  timestamp: Timestamp4;
  pending: Pending4;
  event: Event4;
  model: Model2;
  input: Input2;
  tools: Tools1;
  tool_choice: ToolChoice;
  config: GenerateConfig1;
  output: ModelOutput;
  cache: Cache;
  call: ModelCall | null;
}
/**
 * Specification of a tool (JSON Schema compatible)
 *
 * If you are implementing a ModelAPI, most LLM libraries can
 * be passed this object (dumped to a dict) directly as a function
 * specification. For example, in the OpenAI provider:
 *
 * ```python
 * ChatCompletionToolParam(
 *     type="function",
 *     function=tool.model_dump(exclude_none=True),
 * )
 * ```
 *
 * In some cases the field names don't match up exactly. In that case
 * call `model_dump()` on the `parameters` field. For example, in the
 * Anthropic provider:
 *
 * ```python
 * ToolParam(
 *     name=tool.name,
 *     description=tool.description,
 *     input_schema=tool.parameters.model_dump(exclude_none=True),
 * )
 * ```
 */
export interface ToolInfo {
  name: Name5;
  description: Description;
  parameters: ToolParams;
}
/**
 * Description of tool parameters object in JSON Schema format.
 */
export interface ToolParams {
  type: Type8;
  properties: Properties;
  required: Required1;
  additionalProperties: Additionalproperties1;
}
export interface Properties {
  [k: string]: ToolParam;
}
/**
 * Description of tool parameter in JSON Schema format.
 */
export interface ToolParam {
  type: Type9;
  description: Description1;
  default: Default;
  enum: Enum;
  items: ToolParam | null;
  properties: Properties1;
  additionalProperties: Additionalproperties;
  anyOf: Anyof;
  required: Required;
}
export interface Default {
  [k: string]: unknown;
}
export interface ToolFunction {
  name: Name6;
}
/**
 * Base class for model generation configs.
 */
export interface GenerateConfig1 {
  max_retries: MaxRetries;
  timeout: Timeout;
  max_connections: MaxConnections;
  system_message: SystemMessage;
  max_tokens: MaxTokens;
  top_p: TopP;
  temperature: Temperature;
  stop_seqs: StopSeqs;
  best_of: BestOf;
  frequency_penalty: FrequencyPenalty;
  presence_penalty: PresencePenalty;
  logit_bias: LogitBias;
  seed: Seed;
  suffix: Suffix;
  top_k: TopK;
  num_choices: NumChoices;
  logprobs: Logprobs;
  top_logprobs: TopLogprobs;
  parallel_tool_calls: ParallelToolCalls;
  internal_tools: InternalTools;
  max_tool_output: MaxToolOutput;
  cache_prompt: CachePrompt;
  reasoning_effort: ReasoningEffort;
}
/**
 * Model call (raw request/response data).
 */
export interface ModelCall {
  request: Request;
  response: Response;
}
export interface Request {
  [k: string]: JsonValue;
}
export interface Response {
  [k: string]: JsonValue;
}
/**
 * Call to a tool.
 */
export interface ToolEvent {
  timestamp: Timestamp5;
  pending: Pending5;
  event: Event5;
  type: Type10;
  id: Id3;
  function: Function2;
  arguments: Arguments1;
  view: ToolCallContent | null;
  result: Result;
  truncated: Truncated;
  error: ToolCallError | null;
  events: Events1;
}
export interface Arguments1 {
  [k: string]: JsonValue;
}
/**
 * Tool approval.
 */
export interface ApprovalEvent {
  timestamp: Timestamp6;
  pending: Pending6;
  event: Event6;
  message: Message3;
  call: ToolCall;
  view: ToolCallView | null;
  approver: Approver;
  decision: Decision;
  modified: ToolCall | null;
  explanation: Explanation1;
}
/**
 * Custom view of a tool call.
 *
 * Both `context` and `call` are optional. If `call` is not specified
 * then the view will default to a syntax highlighted Python function call.
 */
export interface ToolCallView {
  context: ToolCallContent | null;
  call: ToolCallContent | null;
}
/**
 * Input screen interaction.
 */
export interface InputEvent {
  timestamp: Timestamp7;
  pending: Pending7;
  event: Event7;
  input: Input3;
  input_ansi: InputAnsi;
}
/**
 * Event with sample score.
 */
export interface ScoreEvent {
  timestamp: Timestamp8;
  pending: Pending8;
  event: Event8;
  score: Score;
  target: Target2;
}
/**
 * Event with sample error.
 */
export interface ErrorEvent {
  timestamp: Timestamp9;
  pending: Pending9;
  event: Event9;
  error: EvalError;
}
/**
 * Log message recorded with Python logger.
 */
export interface LoggerEvent {
  timestamp: Timestamp10;
  pending: Pending10;
  event: Event10;
  message: LoggingMessage;
}
export interface LoggingMessage {
  name: Name7;
  level: Level;
  message: Message4;
  created: Created1;
  filename: Filename;
  module: Module;
  lineno: Lineno;
}
/**
 * Event with custom info/data.
 */
export interface InfoEvent {
  timestamp: Timestamp11;
  pending: Pending11;
  event: Event11;
  data: JsonValue;
}
/**
 * Step within current sample or subtask.
 */
export interface StepEvent {
  timestamp: Timestamp12;
  pending: Pending12;
  event: Event12;
  action: Action;
  type: Type11;
  name: Name8;
}
/**
 * Subtask spawned.
 */
export interface SubtaskEvent {
  timestamp: Timestamp13;
  pending: Pending13;
  event: Event13;
  name: Name9;
  type: Type12;
  input: Input4;
  result: Result1;
  events: Events2;
}
export interface Input4 {}
export interface Result1 {
  [k: string]: unknown;
}
export interface ModelUsage2 {
  [k: string]: ModelUsage1;
}
export interface Attachments {
  [k: string]: string;
}
export interface EvalSampleLimit {
  type: Type13;
  limit: Limit2;
}
export interface EvalSampleReductions {
  scorer: Scorer1;
  reducer: Reducer1;
  samples: Samples2;
}
export interface EvalSampleScore {
  value: Value2;
  answer: Answer1;
  explanation: Explanation2;
  metadata: Metadata8;
  sample_id: SampleId1;
}
