/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The type of the evaluation
 */
export type EvalTypeID = string;
/**
 * Model name. This is currently ignored and inferred from sae.cfg.model_name
 */
export type ModelName = string;
/**
 * LLM data type
 */
export type LLMDataType = string;
/**
 * Batch size for evaluation prompts
 */
export type BatchSizePrompts = number;
/**
 * Number of evaluation batches for reconstruction metrics
 */
export type ReconstructionBatches = number;
/**
 * Number of evaluation batches for sparsity and variance metrics
 */
export type SparsityVarianceBatches = number;
/**
 * Dataset to evaluate on
 */
export type Dataset = string;
/**
 * Context length to evaluate on
 */
export type ContextLength = number;
/**
 * Compute KL divergence
 */
export type ComputeKL = boolean;
/**
 * Compute cross-entropy loss
 */
export type ComputeCELoss = boolean;
/**
 * Compute L2 norms
 */
export type ComputeL2Norms = boolean;
/**
 * Compute sparsity metrics
 */
export type ComputeSparsityMetrics = boolean;
/**
 * Compute variance metrics
 */
export type ComputeVarianceMetrics = boolean;
/**
 * Compute featurewise density statistics
 */
export type ComputeFeaturewiseDensityStatistics = boolean;
/**
 * Compute featurewise weight-based metrics
 */
export type ComputeFeaturewiseWeightBasedMetrics = boolean;
/**
 * Exclude special tokens like BOS, EOS, PAD from reconstruction
 */
export type ExcludeSpecialTokensFromReconstruction = boolean;
/**
 * Enable verbose output
 */
export type Verbose = boolean;
/**
 * A unique UUID identifying this specific eval run
 */
export type ID = string;
/**
 * The datetime of the evaluation in epoch milliseconds
 */
export type DateTimeEpochMs = number;
/**
 * Normalized KL divergence score comparing model behavior with and without SAE
 */
export type KLDivergenceScore = number;
/**
 * KL divergence when the activation is ablated
 */
export type KLDivergenceWithAblation = number;
/**
 * KL divergence when using the SAE reconstruction
 */
export type KLDivergenceWithSAE = number;
/**
 * Normalized cross entropy loss score comparing model performance with and without SAE
 */
export type CrossEntropyLossScore = number;
/**
 * Cross entropy loss when the activation is ablated
 */
export type CELossWithAblation = number;
/**
 * Cross entropy loss when using the SAE reconstruction
 */
export type CELossWithSAE = number;
/**
 * Base cross entropy loss without any intervention
 */
export type CELossWithoutSAE = number;
/**
 * Proportion of variance in the original activation explained by the SAE reconstruction
 */
export type ExplainedVariance = number;
/**
 * Previously used, incorrect, formula for explained variance
 */
export type ExplainedVarianceLegacy = number;
/**
 * Mean squared error between original activation and SAE reconstruction
 */
export type MeanSquaredError = number;
/**
 * Cosine similarity between original activation and SAE reconstruction
 */
export type CosineSimilarity = number;
/**
 * Average L2 norm of input activations
 */
export type InputL2Norm = number;
/**
 * Average L2 norm of reconstructed activations
 */
export type OutputL2Norm = number;
/**
 * Ratio of output to input L2 norms
 */
export type L2Ratio = number;
/**
 * Measure of systematic bias in the reconstruction
 */
export type RelativeReconstructionBias = number;
/**
 * Average number of non-zero feature activations
 */
export type L0Sparsity = number;
/**
 * Average sum of absolute feature activations
 */
export type L1Sparsity = number;
/**
 * Total number of tokens used in reconstruction evaluation
 */
export type TotalTokensReconstruction = number;
/**
 * Total number of tokens used in sparsity and variance evaluation
 */
export type TotalTokensSparsityVariance = number;
/**
 * Proportion of tokens that activate each feature more than 1% of the time
 */
export type ActivationFrequencyOver1 = number;
/**
 * Proportion of tokens that activate each feature more than 10% of the time
 */
export type ActivationFrequencyOver10 = number;
/**
 * Sum of > 1% activation frequency probabilities, normalized by the sum of all feature probabilities
 */
export type NormalizedActivationFrequencyOver1 = number;
/**
 * Sum of > 10% activation frequency probabilities, normalized by the sum of all feature probabilities
 */
export type NormalizedActivationFrequencyOver10 = number;
/**
 * Average of the maximum cosine similarity with any other feature's encoder weights
 */
export type AverageMaxEncoderCosineSimilarity = number;
/**
 * Average of the maximum cosine similarity with any other feature's decoder weights
 */
export type AverageMaxDecoderCosineSimilarity = number;
/**
 * Fraction of features that fired at least once during evaluation. This will likely be an underestimation due to a limited amount of tokens
 */
export type FractionOfAliveFeatures = number;
/**
 * Index of the feature in the SAE
 */
export type FeatureIndex = number;
/**
 * Proportion of tokens that activate each feature
 */
export type FeatureDensity = number;
/**
 * Average number of tokens per prompt that activate each feature
 */
export type ConsistentActivationHeuristic = number;
/**
 * Bias terms in the encoder for each feature
 */
export type EncoderBias = number;
/**
 * L2 norm of encoder weights for each feature
 */
export type EncoderNorm = number;
/**
 * Cosine similarity between encoder and decoder weights for each feature
 */
export type EncoderDecoderCosineSimilarity = number;
/**
 * Maximum cosine similarity with any other feature's decoder weights
 */
export type MaxDecoderCosineSimilarity = number;
/**
 * Maximum cosine similarity with any other feature's encoder weights
 */
export type MaxEncoderCosineSimilarity = number;
/**
 * Detailed metrics for each feature in the SAE
 */
export type FeatureWiseMetrics = CoreFeatureMetric[];
/**
 * The commit hash of the SAE Bench that ran the evaluation.
 */
export type SAEBenchCommitHash = string;
/**
 * The ID of the SAE in SAE Lens.
 */
export type SAELensID = string | null;
/**
 * The release ID of the SAE in SAE Lens.
 */
export type SAELensReleaseID = string | null;
/**
 * The version of SAE Lens that ran the evaluation.
 */
export type SAELensVersion = string | null;
/**
 * The configuration of the SAE (custom or from SAE Lens) that ran the evaluation. This should match the SAE Lens config schema.
 */
export type SAEConfigDict = {
  [k: string]: unknown;
} | null;

/**
 * Core SAE evaluations measuring reconstruction quality, sparsity, and model preservation. From SAELens.
 */
export interface Core {
  eval_type_id?: EvalTypeID;
  eval_config: EvalConfigType;
  eval_id: ID;
  datetime_epoch_millis: DateTimeEpochMs;
  eval_result_metrics: ResultMetricsCategorized;
  eval_result_details?: FeatureWiseMetrics;
  sae_bench_commit_hash: SAEBenchCommitHash;
  sae_lens_id: SAELensID;
  sae_lens_release_id: SAELensReleaseID;
  sae_lens_version: SAELensVersion;
  sae_cfg_dict: SAEConfigDict;
  eval_result_unstructured?: unknown;
  [k: string]: unknown;
}
/**
 * The configuration of the evaluation.
 */
export interface EvalConfigType {
  model_name?: ModelName;
  llm_dtype?: LLMDataType;
  batch_size_prompts?: BatchSizePrompts;
  n_eval_reconstruction_batches?: ReconstructionBatches;
  n_eval_sparsity_variance_batches?: SparsityVarianceBatches;
  dataset?: Dataset;
  context_size?: ContextLength;
  compute_kl?: ComputeKL;
  compute_ce_loss?: ComputeCELoss;
  compute_l2_norms?: ComputeL2Norms;
  compute_sparsity_metrics?: ComputeSparsityMetrics;
  compute_variance_metrics?: ComputeVarianceMetrics;
  compute_featurewise_density_statistics?: ComputeFeaturewiseDensityStatistics;
  compute_featurewise_weight_based_metrics?: ComputeFeaturewiseWeightBasedMetrics;
  exclude_special_tokens_from_reconstruction?: ExcludeSpecialTokensFromReconstruction;
  verbose?: Verbose;
  [k: string]: unknown;
}
/**
 * The metrics of the evaluation, organized by category. Define your own categories and the metrics that go inside them.
 */
export interface ResultMetricsCategorized {
  model_behavior_preservation: ModelBehaviorPreservation;
  model_performance_preservation: ModelPerformancePreservation;
  reconstruction_quality: ReconstructionQuality;
  shrinkage: Shrinkage;
  sparsity: Sparsity;
  token_stats: TokenStatistics;
  misc_metrics: MiscellaneousMetrics;
  [k: string]: unknown;
}
/**
 * Metrics related to how well the SAE preserves model behavior
 */
export interface ModelBehaviorPreservation {
  kl_div_score: KLDivergenceScore;
  kl_div_with_ablation: KLDivergenceWithAblation;
  kl_div_with_sae: KLDivergenceWithSAE;
  [k: string]: unknown;
}
/**
 * Metrics related to how well the SAE preserves model performance
 */
export interface ModelPerformancePreservation {
  ce_loss_score: CrossEntropyLossScore;
  ce_loss_with_ablation: CELossWithAblation;
  ce_loss_with_sae: CELossWithSAE;
  ce_loss_without_sae: CELossWithoutSAE;
  [k: string]: unknown;
}
/**
 * Metrics related to how well the SAE reconstructs the original activation
 */
export interface ReconstructionQuality {
  explained_variance: ExplainedVariance;
  explained_variance_legacy: ExplainedVarianceLegacy;
  mse: MeanSquaredError;
  cossim: CosineSimilarity;
  [k: string]: unknown;
}
/**
 * Metrics related to how the SAE changes activation magnitudes
 */
export interface Shrinkage {
  l2_norm_in: InputL2Norm;
  l2_norm_out: OutputL2Norm;
  l2_ratio: L2Ratio;
  relative_reconstruction_bias: RelativeReconstructionBias;
  [k: string]: unknown;
}
/**
 * Metrics related to feature activation sparsity
 */
export interface Sparsity {
  l0: L0Sparsity;
  l1: L1Sparsity;
  [k: string]: unknown;
}
/**
 * Statistics about the number of tokens used in evaluation
 */
export interface TokenStatistics {
  total_tokens_eval_reconstruction: TotalTokensReconstruction;
  total_tokens_eval_sparsity_variance: TotalTokensSparsityVariance;
  [k: string]: unknown;
}
/**
 * Miscellaneous metrics
 */
export interface MiscellaneousMetrics {
  freq_over_1_percent: ActivationFrequencyOver1;
  freq_over_10_percent: ActivationFrequencyOver10;
  normalized_freq_over_1_percent: NormalizedActivationFrequencyOver1;
  normalized_freq_over_10_percent: NormalizedActivationFrequencyOver10;
  average_max_encoder_cosine_sim: AverageMaxEncoderCosineSimilarity;
  average_max_decoder_cosine_sim: AverageMaxDecoderCosineSimilarity;
  frac_alive: FractionOfAliveFeatures;
  [k: string]: unknown;
}
export interface CoreFeatureMetric {
  index: FeatureIndex;
  feature_density: FeatureDensity;
  consistent_activation_heuristic: ConsistentActivationHeuristic;
  encoder_bias: EncoderBias;
  encoder_norm: EncoderNorm;
  encoder_decoder_cosine_sim: EncoderDecoderCosineSimilarity;
  max_decoder_cosine_sim: MaxDecoderCosineSimilarity;
  max_encoder_cosine_sim: MaxEncoderCosineSimilarity;
  [k: string]: unknown;
}
