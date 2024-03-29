---
title: Research
permalink: research/
profile: true
---

<div class="research-item">
	<div class="img">
		<img src="{{ site.baseurl }}/assets/images/research/MB/KD.png" alt="Model Blending" />
	</div>
	<div class="info">
		<h1>Model Blending for text classification</h1>
		<span class="authors">Ramit Pahwa, Surya Dwivedi, Jayanta Mukhopadhyay, Sunav Choudhary, Vishwa Vinay</span>
		<br>
		<span class="conf">Masters Thesis done in colloboration with Adobe Research and IIT Kharagpur</span>
		<p class="desc">
			State-of-the-art for many NLP tasks are dominated by deep learning models. Effectively utilizing the signal in the sequence of words via Recurrent Neural Networks (RNNs) provides impressive accuracies, especially when using LSTM-based models. These models however
have the disadvantage of longer scoring times.
Convolutional Neural Networks (CNNs) on the other hand are significantly faster during inference due to their parallelism. Moreover, some recent work suggests that RNN and CNN provide complementary information
when trained on the same data for various NLP
tasks. In this paper, we propose a method that allows the training of very competitive CNNs
by blending in the complementary knowledge from an LSTM Teacher model. We empirically validate the method on multiple standard text classification datasets to demonstrate that
the Student CNN model can be up to 15x faster than the Teacher LSTM, while being more accurate than training the same CNN model directly from the data.
		</p>
		<ul>
			<li><a href="{{ site.baseurl }}/publications/Model_Blending.pdf" target="blank">Paper</a></li>
		</ul>
	</div>
</div>

<div class="research-item">
	<div class="img">
		<img src="{{ site.baseurl }}/assets/images/research/DDC/architecture.png" alt="p-ACE" />
	</div>
	<div class="info">
		<h1>Data-Driven Compression of Convolutional Neural Networks</h1>
		<span class="authors">Ramit Pahwa, Manoj Ghuhan Arivazhagan, Ankur Garg, Siddarth Krishnamoorthy, Rohit Saxena, Sunav Choudhary</span>
		<br>
		<span class="conf">Research Internship at Adobe Research, ACM</span>
		<p class="desc">
			Deploying trained convolutional neural networks (CNNs) to mobile devices is a challenging task because
of the simultaneous requirements of the deployed model to be fast, lightweight and accurate. Designing
and training a CNN architecture that does well on all three metrics is highly non-trivial and can be very
time-consuming if done by hand. One way to solve this problem is to compress the trained CNN models
before deploying to mobile devices. is work asks and answers three questions on compressing CNN
models automatically: a) How to control the trade-o between speed, memory and accuracy during model
compression? b) In practice, a deployed model may not see all classes and/or may not need to produce all
class labels. Can this fact be used to improve the trade-o? c) How to scale the compression algorithm to
execute within a reasonable amount of time for many deployments? e paper demonstrates that a model
compression algorithm utilizing reinforcement learning with architecture search and knowledge distillation
can answer these questions in the armative. Experimental results are provided for current state-of-the-art
CNN model families for image feature extraction like VGG and ResNet with CIFAR dataset
		</p>
		<ul>
			<li><a href="https://arxiv.org/pdf/1911.12740.pdf" target="blank">Paper</a></li>
			<li><a href="https://github.com/RamitPahwa/DDC_modelcompression" target="blank">Code</a></li>
		</ul>
	</div>
</div>

<div class="research-item">
	<div class="img">
		<img src="{{ site.baseurl }}/assets/images/research/HateSpeech/attention.png" alt="ACE" />
	</div>
	<div class="info">
		<h1>LSTMs with Attention for Aggression Detection</h1>
		<span class="authors">Nishant Nikhil, Ramit Pahwa, Mehul Kumar Nirala, Rohan Khilnani</span>
		<br>
		<span class="conf">Proceedings of the First Workshop on Trolling, Aggression and Cyberbullying, COLING 2018</span>
		<p class="desc">
			We describe the system submitted for the shared task on Aggression Identification in Facebook posts and comments.Previous works demonstrate that
LSTMs have achieved remarkable performance in natural language processing tasks. We deploy
an LSTM model with an attention unit over it. Our system ranks 6th and 4th in the Hindi subtask
for Facebook comments and subtask for generalized social media data respectively. And it ranks
17th and 10th in the corresponding English subtasks.
		</p>
		<ul>
			<li><a href="https://aclanthology.org/W18-4406.pdf" target="blank">Paper</a></li>
			<li><a href="https://github.com/RamitPahwa/LSTMs-with-Attention-For-Aggression-Detection" target="blank">Code</a></li>
		</ul>
	</div>
</div>

<div class="research-item" style="border-bottom: none;">
	<div class="img">
		<img src="{{ site.baseurl }}/assets/images/research/UoA/pic.png" alt="JPP" />
	</div>
	<div class="info">
		<h1>Identification of Hip Dysplasia in Infants.</h1>
		<span class="authors">Ramit Pahwa, Dana Cobzas</span>
		<br>
		<span class="conf">Research Internship at University of Alberta, Presented as a poster in UoA Symposium</span>
		<p class="desc"> We introduce an approach for end to end training regime involving localization and segmentation using Faster RCNN and U Net. This involved collection and cleanup of High Dimensional MRI images and then proposed a novel end to end regime to first localize the Femoral head using RCNN model then segment it.
		</p>
	</div>
</div>
